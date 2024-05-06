type Comp002Data = {
  content: {
    _meta: {
      name: string;
      schema: string;
      deliveryId: string;
    };
    cardImage: Card;
    cardName: string;
    cardHeading: string;
    cardBtnLink: string;
  };
};
export type cardInner = {
  cardImage: Card;
  cardName: string;
  cardHeading: string;
  cardBtnLink: string;
};
export type Card = {
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
export type Cardlist002 = {
  content: {
    _meta: {
      name: "Content-048_cardlist_draft";
      schema: "https://dfs-content.co.uk/content-048_cardlist.json";
      deliveryId: "5ef16899-574f-498d-acb6-afb93e376b3a";
    };
    headingBox: {
      headingType: "h2";
      dutchText: false;
      disableReadmore: false;
    };
    cards: [
      {
        _meta: {
          name: "Content-002_card-fabric-sofas";
          schema: "https://dfs-content.co.uk/content-002_card.json";
          deliveryId: "1883dc50-801a-41e5-97cb-1dc5f3c88533";
        };
        cardImage: {
          image: {
            _meta: {
              schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link";
            };
            id: "eecc78c8-2f38-4fe4-82d2-d4786ae1b003";
            name: "content-048_card_inspiration_coty_v2";
            endpoint: "dfs";
            defaultHost: "classic.cdn.media.amplience.net";
          };
          imageAltText: "Dulux Colour of the Year";
          seoText: "dulux-colour-of-the-year";
          _meta: { schema: "https://dfs-content.co.uk/general/image.json" };
        };
        cardName: "Colour of the Year Card";
        cardHeading: "DFS x Dulux Colour of the Year 2023";
        cardBtnLink: "/content/colour-of-year";
      },
      {
        _meta: {
          name: "Content-002_card-fabric-sofas";
          schema: "https://dfs-content.co.uk/content-002_card.json";
          deliveryId: "5836ef3f-09de-4ab3-904a-82ffbd658751";
        };
        cardImage: {
          image: {
            _meta: {
              schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link";
            };
            id: "3840f4ea-3bed-4b6a-a2ab-5a058fe12c97";
            name: "content-048_cardlist_inspiration_monochrome";
            endpoint: "dfs";
            defaultHost: "classic.cdn.media.amplience.net";
          };
          imageAltText: "Monochrome";
          seoText: "monochrome";
          _meta: { schema: "https://dfs-content.co.uk/general/image.json" };
        };
        cardName: "Monochrome";
        cardHeading: "Monochrome";
        cardBtnLink: "/content/grey-living-room-ideas";
      },
      {
        _meta: {
          name: "Content-002_card-fabric-sofas";
          schema: "https://dfs-content.co.uk/content-002_card.json";
          deliveryId: "a7aca9ca-13b9-4ed6-b716-6d68dfa72351";
        };
        cardImage: {
          image: {
            _meta: {
              schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link";
            };
            id: "f65f8b11-18d7-4131-b2f8-a6765a86dcde";
            name: "content-048_cardlist_inspiration_tech-sofas";
            endpoint: "dfs";
            defaultHost: "classic.cdn.media.amplience.net";
          };
          imageAltText: "Tech Sofas";
          seoText: "tech-sofas";
          _meta: { schema: "https://dfs-content.co.uk/general/image.json" };
        };
        cardName: "Tech Sofas";
        cardHeading: "Tech sofas";
        cardBtnLink: "content/tech-sofas";
      },
      {
        _meta: {
          name: "Content-002_card-fabric-sofas";
          schema: "https://dfs-content.co.uk/content-002_card.json";
          deliveryId: "468984bc-10e3-49ff-83a6-7ecaed1e6f9b";
        };
        cardImage: {
          image: {
            _meta: {
              schema: "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link";
            };
            id: "26761974-5489-4978-a35e-36edcb409b2d";
            name: "content-048_cardlist_inspiration_home-office";
            endpoint: "dfs";
            defaultHost: "classic.cdn.media.amplience.net";
          };
          imageAltText: "Home Office";
          seoText: "home-office";
          _meta: { schema: "https://dfs-content.co.uk/general/image.json" };
        };
        cardName: "Create a Home Office";
        cardHeading: "Create a home office";
        cardBtnLink: "/content/create-a-home-office";
      }
    ];
    button: { buttonType: "outlined"; buttonColour: "secondary" };
  };
};
export default Comp002Data;
