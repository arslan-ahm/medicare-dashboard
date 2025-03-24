
export type UseForgetPasswordFormReturn =  {
    email: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleForgetPassword: (e: React.FormEvent) => Promise<void>;
    error: string | null;
    loading: boolean;
  }