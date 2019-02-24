export abstract class AuthProvider {
    public abstract loggedIn: boolean;

    public abstract redirectUrl: string;

    public abstract signIn(): Promise<void>;

    public abstract signOut(): void;
}
