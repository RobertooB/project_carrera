import { Usuario } from "../usuario/usuario";

export interface Carrera{
    id: number,
    nombre: string,
    tipoCarrera: string,
    updated: Date,
    enabled: boolean,
    deleted:Date,
    archived:boolean,
    usuarioId:number,
    usuarios:Usuario[]
}
