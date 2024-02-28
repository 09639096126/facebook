import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSUpabase } from './utils/initSUpabase'; // Fix the typo here
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  supabase: SupabaseClient = createClient(initSUpabase.supabseUrl, initSUpabase.supabaseKey);

  constructor() { }

  async ApiaddTodo(todo: Todo) {
    const { data, error } = await this.supabase
      .from('todos') // Remove the type argument here
      .insert([todo]);

    return { data, error };
  }
  async ApiViewTodos() {
    const { data, error } = await this.supabase
      .from('todos')
      .select('*'); // You can select specific fields if needed

    return { data, error };
  }
  async ApideleteTodo(todoId: number) {
    const { data, error } = await this.supabase
      .from('todos')
      .delete()
      .eq('id', todoId);

    return { data, error };
  }
}