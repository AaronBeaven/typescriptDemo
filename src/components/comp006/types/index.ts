type Comp006Data = {
  content: {
    _meta: {
      name: string;
      schema: string;
      deliveryId: string;
    };
    cards: card[];
    header: string;
  };
};

export type card = {
  _meta: {
    name: string;
    schema: string;
    deliveryId: string;
  };
  cardImage: {
    image: {
      _meta: {
        schema: string;
      };
      id: string;
      name: string;
      endpoint: string;
      defaultHost: string;
    };
    imageAltText: string;
    seoText: string;
    _meta: {
      schema: string;
    };
  };
  roundel: {
    roundelPosition: string;
    roundelSize: number;
    roundelSize_xl: number;
    roundelSize_dsk: number;
    roundelSize_tbt: number;
    roundelSize_mob: number;
  };
  cardName: string;
  cardHeading: string;
  cardBtnText: string;
  cardBtnLink: string;
  buttonType: string;
  buttonColour: string;
};

export default Comp006Data;
