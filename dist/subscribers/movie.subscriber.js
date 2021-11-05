"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSubscriber = void 0;
const movie_entity_1 = require("../entities/movie.entity");
const typeorm_1 = require("typeorm");
let MovieSubscriber = class MovieSubscriber {
    constructor(connection) {
        connection.subscribers.push(this);
    }
    listenTo() {
        return movie_entity_1.Movie;
    }
    beforeInsert(event) {
        console.log(`데이터 삽입을 시도합니다...`, event.entity);
    }
    afterInsert(event) {
        console.log(`데이터 삽입 시도가 완료되었습니다... `, event.entity);
    }
    beforeUpdate(event) {
        console.log(`데이터 업데이트를 시도합니다... `, event.entity);
    }
    afterUpdate(event) {
        console.log(`데이터 업데이트 시도가 완료되었습니다... `, event.entity);
    }
    beforeTransactionStart(event) {
        console.log('Transaction을 시도합니다...');
    }
    afterTransactionCommit(event) {
        console.log(`Transaction이 Commit되었습니다...`);
    }
    afterTransactionRollback(event) {
        console.log(`Transaction이 완료되지 못해 rollback되었습니다.`);
    }
};
MovieSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], MovieSubscriber);
exports.MovieSubscriber = MovieSubscriber;
//# sourceMappingURL=movie.subscriber.js.map