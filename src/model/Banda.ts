import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Lider } from "./Lider";

@Entity(`${process.env.ARQ_DB_NAME}.BANDA`)
export class Banda {

    @PrimaryGeneratedColumn({ name: "BANDA_ID" })
    public banda_id!: number;

    @Column({ name: "BANDA_NOMBRE" })
    public banda_nombre!: string;

}