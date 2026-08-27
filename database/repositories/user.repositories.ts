import { UserModel } from "@/models/user.model";
import { db } from "../database";

export const userRepository = {
  async findAll(): Promise<UserModel[]>{
    const database = await db;
    return database.getAllAsync<UserModel>(
      'SELECT * FROM users ORDER BY id DESC'
    );
  },
  async findById(id:number): Promise<UserModel | null>{
    const  database = await db;
    return database.getFirstAsync<UserModel>(
      'SELECT * FROM users WHERE id = ?'
    );
  },
  async create(name: string, age:number){
    const database = await db;
    return database.runAsync(
      'INSERT INTO users (name, age) VALUES (?, ?)',
      name,
      age
    );
  },
  async delete(id:number){
    const database = await db;
    return database.runAsync(
      'DELETE FROM users WHERE id = ?',
      id
    );
  }
}