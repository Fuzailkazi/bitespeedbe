export declare function identifyContact(email?: string, phoneNumber?: string): Promise<{
    contact: {
        primaryContactId: number;
        emails: (string | null)[];
        phoneNumbers: (string | null)[];
        secondaryContactIds: number[];
    };
}>;
//# sourceMappingURL=identifyService.d.ts.map