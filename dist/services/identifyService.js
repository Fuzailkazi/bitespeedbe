import { prisma } from "../prisma/client.js";
export async function identifyContact(email, phoneNumber) {
    if (!email && !phoneNumber) {
        throw new Error("At least one of email or phoneNumber is required");
    }
    // Convert undefined to null for Prisma
    const emailValue = email ?? null;
    const phoneValue = phoneNumber ?? null;
    // Find existing contacts that match email or phoneNumber
    const contacts = await prisma.contact.findMany({
        where: {
            OR: [
                emailValue ? { email: emailValue } : {},
                phoneValue ? { phoneNumber: phoneValue } : {}
            ]
        },
        orderBy: { createdAt: "asc" }
    });
    // If no contacts exist, create a new primary contact
    if (contacts.length === 0) {
        const newContact = await prisma.contact.create({
            data: { email: emailValue, phoneNumber: phoneValue, linkPrecedence: "primary" }
        });
        return {
            contact: {
                primaryContactId: newContact.id,
                emails: emailValue ? [emailValue] : [],
                phoneNumbers: phoneValue ? [phoneValue] : [],
                secondaryContactIds: []
            }
        };
    }
    // Determine primary contact
    let primaryContact = contacts.find(c => c.linkPrecedence === "primary") || contacts[0];
    if (!primaryContact)
        throw new Error("Primary contact not found");
    // Create secondary contact if incoming info is new
    const needsSecondary = (emailValue && !contacts.some(c => c.email === emailValue)) ||
        (phoneValue && !contacts.some(c => c.phoneNumber === phoneValue));
    if (needsSecondary) {
        await prisma.contact.create({
            data: {
                email: emailValue,
                phoneNumber: phoneValue,
                linkedId: primaryContact.id,
                linkPrecedence: "secondary"
            }
        });
    }
    // Fetch all linked contacts including primary
    const allContacts = await prisma.contact.findMany({
        where: {
            OR: [
                { id: primaryContact.id },
                { linkedId: primaryContact.id }
            ]
        }
    });
    return {
        contact: {
            primaryContactId: primaryContact.id,
            emails: [...new Set(allContacts.map(c => c.email).filter(Boolean))],
            phoneNumbers: [...new Set(allContacts.map(c => c.phoneNumber).filter(Boolean))],
            secondaryContactIds: allContacts
                .filter(c => c.linkPrecedence === "secondary")
                .map(c => c.id)
        }
    };
}
//# sourceMappingURL=identifyService.js.map