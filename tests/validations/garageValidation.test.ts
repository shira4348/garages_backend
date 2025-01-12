import { garageValidationSchema } from "../../src/validations/garageValidation";

beforeEach(() => {
  jest.clearAllMocks();
});


describe("Garage Validation Schema", () => {
  it("should validate a correct garage array", () => {
    const validInput = [
      {
        _id: 1,
        mispar_mosah: 123,
        shem_mosah: "מוסך דוגמה",
        cod_sug_mosah: 6,
        sug_mosah: "מוסך מורשה",
        ktovet: "כתובת דוגמה",
        yishuv: "יישוב דוגמה",
        telephone: "050-1234567",
        mikud: 12345,
        cod_miktzoa: 10,
        miktzoa: "מכונאות רכב",
        menahel_miktzoa: "אדם דוגמה",
        rasham_havarot: 123456789,
        TESTIME: "",
      },
    ];

    const { error } = garageValidationSchema.validate(validInput);
    expect(error).toBeUndefined();
  });

  it("should fail when a required field is missing", () => {
    const invalidInput = [
      {
        mispar_mosah: 123,
        shem_mosah: "מוסך דוגמה",
        cod_sug_mosah: 6,
        sug_mosah: "מוסך מורשה",
        ktovet: "כתובת דוגמה",
        yishuv: "יישוב דוגמה",
        telephone: "050-1234567",
        mikud: 12345,
        cod_miktzoa: 10,
        miktzoa: "מכונאות רכב",
        menahel_miktzoa: "אדם דוגמה",
        rasham_havarot: 123456789,
        TESTIME: "",
      },
    ];

    const { error } = garageValidationSchema.validate(invalidInput);
    expect(error).toBeDefined();

    if (error) {
      expect(error.details[0].message).toContain("_id");
    }
  });

  it("should allow optional fields to be empty or missing", () => {
    const validInput = [
      {
        _id: 1,
        mispar_mosah: 123,
        shem_mosah: "מוסך דוגמה",
        cod_sug_mosah: 6,
        sug_mosah: "מוסך מורשה",
        ktovet: "כתובת דוגמה",
        yishuv: "יישוב דוגמה",
        telephone: "050-1234567",
        mikud: 12345,
        cod_miktzoa: 10,
        miktzoa: "מכונאות רכב",
        menahel_miktzoa: "אדם דוגמה",
        TESTIME: null,
      },
    ];

    const { error } = garageValidationSchema.validate(validInput);
    expect(error).toBeUndefined();
  });

  it("should fail when a field has the wrong type", () => {
    const invalidInput = [
      {
        _id: "not-a-number",
        mispar_mosah: 123,
        shem_mosah: "מוסך דוגמה",
        cod_sug_mosah: 6,
        sug_mosah: "מוסך מורשה",
        ktovet: "כתובת דוגמה",
        yishuv: "יישוב דוגמה",
        telephone: "050-1234567",
        mikud: 12345,
        cod_miktzoa: 10,
        miktzoa: "מכונאות רכב",
        menahel_miktzoa: "אדם דוגמה",
        rasham_havarot: 123456789,
        TESTIME: "",
      },
    ];

    const { error } = garageValidationSchema.validate(invalidInput);
    expect(error).toBeDefined();

    if (error) {
      expect(error.details[0].message).toContain("_id");
    }
  });
});
