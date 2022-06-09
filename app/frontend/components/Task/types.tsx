export type IPriority = 'p1' | 'p2' | 'p3' | 'p4'
export interface Task {
  name: string
  description: string
  id: string
  due_date?: string
  priority: IPriority
}
