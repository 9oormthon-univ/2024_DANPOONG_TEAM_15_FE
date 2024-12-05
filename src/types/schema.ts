export interface ApplicationDataSchema {
  id: string;
  name: string;
  applyDate: string;
  careDate: string;
  careTime: string;
  status: string;
}

export interface ChildDataSchema {
  childId: number;
  childName: string;
  age: number;
  image: string;
  recentApplyStatus: string;
}

export interface ChildInfoSchema {
  childId: number;
  childName: string;
  age: number;
  gender: string;
}

export interface CareInfoSchema {
  applyId: number;
  applyDate: string;
  careDate: string;
  careTime: string;
}
