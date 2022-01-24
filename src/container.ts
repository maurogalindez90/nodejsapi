import { createContainer, asClass } from 'awilix';
import { TestService } from './services/test.service';
import express = require('express');
import { scopePerRequest } from 'awilix-express'
import { SecondTestService } from './services/secondTest.service';
import { SecondTestRepository } from './persistence/repositories/secondTest.repository';

export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({
        // services

        testService: asClass(TestService).scoped(),
        secondTestService: asClass(SecondTestService).scoped(),

        // repositories
        secondTestRepository: asClass(SecondTestRepository).scoped()
    });

    app.use(scopePerRequest(container));
}