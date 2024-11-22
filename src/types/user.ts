export interface SignUpRequestBody {
  email: string;
  name: string;
  password: string;
  incomeType: 'A' | 'B' | 'C';
}
