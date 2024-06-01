import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAboutCount extends Schema.Component {
  collectionName: 'components_about_about_counts';
  info: {
    displayName: 'about_count';
    icon: 'cursor';
  };
  attributes: {
    count_or_year: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface AboutForm extends Schema.Component {
  collectionName: 'components_about_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
    phone_number: Attribute.Integer;
    message: Attribute.Text;
  };
}

export interface HomePageFooterContact extends Schema.Component {
  collectionName: 'components_home_page_footer_contacts';
  info: {
    displayName: 'footer_contact';
  };
  attributes: {
    footer_number: Attribute.String;
    footer_email: Attribute.Email;
    footer_adress: Attribute.Text;
  };
}

export interface HomePageHomePopularTours extends Schema.Component {
  collectionName: 'components_home_page_home_popular_tours';
  info: {
    displayName: 'home_popular_tours';
  };
  attributes: {
    tours: Attribute.Relation<
      'home-page.home-popular-tours',
      'oneToMany',
      'api::tour.tour'
    >;
  };
}

export interface HomePageHomeSlider extends Schema.Component {
  collectionName: 'components_home_page_home_sliders';
  info: {
    displayName: 'home_slider';
    description: '';
  };
  attributes: {
    location: Attribute.Relation<
      'home-page.home-slider',
      'oneToOne',
      'api::location.location'
    >;
    slider_title: Attribute.String;
    slider_description: Attribute.Text;
    slider_link: Attribute.String;
    slider_cover: Attribute.Media;
  };
}

export interface MetaMetaHeader extends Schema.Component {
  collectionName: 'components_meta_meta_headers';
  info: {
    displayName: 'meta_header';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    seo_keywords: Attribute.String;
  };
}

export interface MetaTitle extends Schema.Component {
  collectionName: 'components_meta_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    seo_keywords: Attribute.String;
  };
}

export interface TourIncluded extends Schema.Component {
  collectionName: 'components_tour_includeds';
  info: {
    displayName: 'included';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface TourLocation extends Schema.Component {
  collectionName: 'components_tour_locations';
  info: {
    displayName: 'location_google';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    longitude: Attribute.String;
    latitude: Attribute.String;
  };
}

export interface TourReview extends Schema.Component {
  collectionName: 'components_tour_reviews';
  info: {
    displayName: 'review';
    icon: 'sun';
  };
  attributes: {
    review_score: Attribute.Integer;
    name: Attribute.String;
    email: Attribute.Email;
    comment: Attribute.Text;
    review_image: Attribute.Media;
  };
}

export interface TourSliderImage extends Schema.Component {
  collectionName: 'components_tour_slider_images';
  info: {
    displayName: 'tour_slider_images';
    icon: 'play';
    description: '';
  };
  attributes: {
    slider_image: Attribute.Media;
  };
}

export interface TourTourDays extends Schema.Component {
  collectionName: 'components_tour_tour_days';
  info: {
    displayName: 'tour_days';
    icon: 'sun';
    description: '';
  };
  attributes: {
    count: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    day_images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about-count': AboutAboutCount;
      'about.form': AboutForm;
      'home-page.footer-contact': HomePageFooterContact;
      'home-page.home-popular-tours': HomePageHomePopularTours;
      'home-page.home-slider': HomePageHomeSlider;
      'meta.meta-header': MetaMetaHeader;
      'meta.title': MetaTitle;
      'tour.included': TourIncluded;
      'tour.location': TourLocation;
      'tour.review': TourReview;
      'tour.slider-image': TourSliderImage;
      'tour.tour-days': TourTourDays;
    }
  }
}
