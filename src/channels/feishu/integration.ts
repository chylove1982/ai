// integration.ts

// Feishu (also known as Lark) Integration

type FeishuMessage = {
    user_id: string;
    content: string;
    // additional fields as per your requirement
};

class FeishuIntegration {
    private webhookUrl: string;

    constructor(webhookUrl: string) {
        this.webhookUrl = webhookUrl;
    }

    async sendMessage(message: FeishuMessage): Promise<void> {
        const response = await fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }
    }
}

export default FeishuIntegration;