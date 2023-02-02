import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

describe("AppService", () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return version", () => {
    const version = {
      name: "APIName",
      version: '1.0.0',
    };

    expect(service.getVersao().name).toEqual(version.name);
    expect(service.getVersao().version).toEqual(version.version);
  });
});
