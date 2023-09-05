import { Candidate } from "src/candidate/entities/candidate.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidv4} from "uuid"

@Entity('registers')
export class Register {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    status: "Aguardando" | "Aprovado" | "Reprovado"

    @OneToOne(() => Candidate)
    @JoinColumn()
    candidate: Candidate

    @BeforeInsert()
    generateId() {
        if (this.id){
            return;
        }

        this.id = uuidv4();
    }
}
