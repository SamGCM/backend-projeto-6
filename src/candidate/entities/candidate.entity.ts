import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { ISkill } from "../interfaces/skills";
@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;
    
    @Column()
    document: string;
    
    @Column()
    dateOfBirth: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    schooling: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"

    @Column()
    function: string;

    @Column({
        type: "json",
        nullable: true,
      })
    listOfSkills: ISkill[];

    @BeforeInsert()
    generateId() {
        if (this.id){
            return;
        }

        this.id = uuidv4();
    }

}
