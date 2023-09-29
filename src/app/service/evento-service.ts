import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Evento } from "../model/evento-model";
import { PRO_API } from "../app-api";

@Injectable()
export class EventoService {

    constructor(private http: HttpClient) {}

    listarEventos(): Observable<Evento[]> {
        return this.http.get<Evento[]>( `${PRO_API}/projeto-backend/rest/evento/listar`);
    }

    adicionarEvento(evento: Evento) {
        return this.http.post(`${PRO_API}/projeto-backend/rest/evento/`, evento);
    }


}   