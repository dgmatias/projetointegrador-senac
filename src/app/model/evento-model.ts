import { Time } from "@angular/common";

export interface Evento {
    id: number;
    img_src: string;
    titulo: string;
    data_evento: Date;
    hora: Time;
    bairro: string;
    estado: string;
    rua: string;
    descricao: string;
    politica: string;
    min_lotacao: number;
    max_lotacao: number;
    status: boolean;
    min_idade: number;
    categoria_id: number;
}