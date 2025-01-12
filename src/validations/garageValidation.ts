import Joi from "joi";

export const garageValidationSchema = Joi.array()
  .items(
    Joi.object({
      _id: Joi.number().required(),
      mispar_mosah: Joi.number().required(),
      shem_mosah: Joi.string().required(),
      cod_sug_mosah: Joi.number().required(),
      sug_mosah: Joi.string().required(),
      ktovet: Joi.string().required(),
      yishuv: Joi.string().required(),
      telephone: Joi.string().required(),
      mikud: Joi.number().required(),
      cod_miktzoa: Joi.number().required(),
      miktzoa: Joi.string().required(),
      menahel_miktzoa: Joi.string().required(),
      rasham_havarot: Joi.number().optional(),
      TESTIME: Joi.string().optional().allow(null).allow(""),
    })
  )
  .required();
