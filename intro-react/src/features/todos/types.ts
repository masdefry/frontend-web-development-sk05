export interface Todo {
  description: string;
  isCompleted: boolean;
  objectId: string;
  ownerId?: string;
  created: Date;
  updated: Date;
}
