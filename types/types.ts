export type GenericObject = Record<string, any>;

export interface Assignment {
  id: number;
  user_id: number;
  email: string;
  status: string;
  configuration: GenericObject;
  df_1: string;
  df_2: string;
  df_3: string;
  df_4: string;
}

export interface Comment {
  created_at: string;
  id: number;
  text: string;
  user: { email: string };
}

export interface Expense {
  id: number;
  total_amount: string;
  currency: string;
  date: string;
  category: string;
  description: string;
  status: string;
  user_email: string;
  provider_business_name: string;
  document_url: string;
  approval_status: string;
  created_at: string;
  assignments: Assignment[];
  comments: Comment[];
  imputations: GenericObject;
}
