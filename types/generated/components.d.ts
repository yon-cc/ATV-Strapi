import type { Schema, Attribute } from '@strapi/strapi';

export interface ContenidoCiudadPaquete extends Schema.Component {
  collectionName: 'components_hoteles_paquetes';
  info: {
    displayName: 'Paquete';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Paquete: Attribute.Relation<
      'contenido-ciudad.paquete',
      'oneToOne',
      'api::boda-ciudad.boda-ciudad'
    >;
  };
}

export interface ContenidoCiudadHoteles extends Schema.Component {
  collectionName: 'components_hoteles_hoteles';
  info: {
    displayName: 'Hoteles';
    icon: 'gate';
    description: '';
  };
  attributes: {
    Hoteles: Attribute.Relation<
      'contenido-ciudad.hoteles',
      'oneToMany',
      'api::hotel.hotel'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contenido-ciudad.paquete': ContenidoCiudadPaquete;
      'contenido-ciudad.hoteles': ContenidoCiudadHoteles;
    }
  }
}
