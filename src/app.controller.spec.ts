import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = app.get<AppController>(AppController);
    service = app.get<AppService>(AppService);
  });

  describe("root", () => {
    it("should return Defined", () => {
      expect(controller).toBeDefined();
    });

    it("should return version", () => {
      const version = {
        name: "APIName",
        version: "1.0.0",
      };

      jest.spyOn(service, "getVersao").mockImplementation(() => version);
      expect(controller.getVersao()).toBe(version);
    });
  });
});
