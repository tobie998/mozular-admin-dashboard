export interface Module {
  module_id: string;
  short_description: string;
  price: string;
  currency: string;
  image1: string;
  name: string;
}

export class ModuleDetail {
  module_meta: string;
  currency: string;
  full_description: string;
  status: string;
  module_id: string;
  name: string;
  short_description: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  price: string;
}

export class Duration {
  end_date: string;
  module_id: string;
  start_date: string;
}
