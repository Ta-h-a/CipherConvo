// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface IEmailService {
  sendAccountVerificationEmail(email: string): Promise<void>;
}
