import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { User } from "./User"

@Entity('user_roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true, nullable: true })
    role_name: string

    @Column("json", { nullable: true })
    permissions: object

    @OneToMany(() => User, user => user.roleId)
    users: User[];    
}
