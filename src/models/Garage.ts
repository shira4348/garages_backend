import mongoose, { Schema, Document } from "mongoose";

interface IGarage extends Document {
  _id:number;
  mispar_mosah: number;
  shem_mosah: string;
  cod_sug_mosah: number;
  sug_mosah: string;
  ktovet: string;
  yishuv: string;
  telephone: string;
  mikud: number;
  cod_miktzoa: number;
  miktzoa: string;
  menahel_miktzoa: string;
  rasham_havarot: number;
  TESTIME?: string; 
}

const GarageSchema: Schema = new Schema({
  _id:{type: Number,require:true},
  mispar_mosah: { type: Number, required: true },
  shem_mosah: { type: String, required: true },
  cod_sug_mosah: { type: Number, required: true },
  sug_mosah: { type: String, required: true },
  ktovet: { type: String, required: true },
  yishuv: { type: String, required: true },
  telephone: { type: String, required: true },
  mikud: { type: Number, required: true },
  cod_miktzoa: { type: Number, required: true },
  miktzoa: { type: String, required: true },
  menahel_miktzoa: { type: String, required: true },
  rasham_havarot: { type: Number , default: ""},
  TESTIME: { type: String, default: "" }, 
});

export default mongoose.model<IGarage>("Garage", GarageSchema);
