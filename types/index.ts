export type GenericObject = Record<string, any>;

export type Assignment = {
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

export type Comment = {
  created_at: string;
  id: number;
  text: string;
  user: { email: string };
}

export type ExpenseCategory = 'accomodation' | 'meals' | 'fuel' | 'transport' | 'flight' | 'other';
type ExpenseStatus = 'pending' | 'submitted' | 'reimbursed';
type ApprovalStatus = 'unassigned' | 'approved' | 'rejected' | 'approval_pending';

export type Expense = {
  id: number;
  total_amount: string;
  currency: string;
  date: string;
  category: ExpenseCategory;
  description: string;
  status: ExpenseStatus;
  user_email: string;
  provider_business_name: string;
  document_url: string;
  approval_status: ApprovalStatus;
  created_at: string;
  assignments: Assignment[];
  comments: Comment[];
  imputations: GenericObject;
}
