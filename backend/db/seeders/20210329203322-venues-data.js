'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [
        {
          title: 'TownHome',
          description: 'This quaint town home is a perfect place to hold a concert for a string quartet or for solo piano. We have an upright piano in the house that is available for use and is always tuned properly.',
          maxGuests: '50',
          dailyCost: '80.00',
          address: '1200 W Hillford Ave',
          bookingImgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-decor-ideas-sfshowcaselivingroom-03-1585257771.jpg',
          city: 'Michigan City',
          state: 'Michigan',
        },
        {
          title: 'Loft Venue',
          description: 'Outdoor space that can be used to hold concerts in winter or summer as it is well insulated and heated.',
          maxGuests: '40',
          dailyCost: '22.00',
          address: '10 W Hill Ave',
          bookingImgUrl: 'https://media.istockphoto.com/photos/modern-house-interior-design-picture-id1142747548?k=6&m=1142747548&s=612x612&w=0&h=czYvRWAXnGCgBYS9u09ceVJDUbAlbnOef_IsDtONtIs=',
          city: 'East Chicago',
          state: 'Indiana',
        },
        {
          title: 'Studio apartment',
          description: 'Super spacious studio apartment for intimate chamber concerts. Have space for bigger groups too but performers will need to bring more stands. Please fell free to ask any questions about the place.',
          maxGuests: '20',
          dailyCost: '75.00',
          address: '1452 N Ashford Ave',
          bookingImgUrl: 'https://images.adsttc.com/media/images/6053/e021/f91c/81a5/e900/06a2/newsletter/01_KRADS_thingvellir.jpg?1616109565',
          city: 'Oberlin',
          state: 'Ohio',
        },
        {
          title: 'East Cleveland basement',
          description: 'Gritty but spacious spot, perfect for house shows. Two apms in-house. Drumset and Yamaha keyboard available upon request. Street parking and garage access on East, overflow seating and smoking area in backyard. BYOB allowed.',
          maxGuests: '55',
          dailyCost: '40.00',
          address: '11021 East Boulevard',
          bookingImgUrl: 'https://www.landmarkhomes.co.nz/wp-content/uploads/2019/06/Kinloch_living.jpg',
          city: 'Cleveland',
          state: 'Ohio',
        },
        {
          title: 'Elegant home',
          description: 'Living-room area with recently tuned piano available for concerts of classical and acoustic music. We live in an elderly neighborhood so matinee performances would be best.',
          maxGuests: '35',
          dailyCost: '25.00',
          address: '1655 Pelham Road',
          bookingImgUrl: 'data:image/jpeg;base64,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',
          city: 'Greenville',
          state: 'South Carolina',
        },
        {
          title: 'Outdoor amphitheater',
          description: 'Amphitheater space and park by Elk Park Christian Church open for family-friendly concerts. Amps, stands, microphones, keyboard, and drumset available with two weeks notice. Alcohol not permitted.',
          maxGuests: '350',
          dailyCost: '115.00',
          address: '220 Old Mill Rd',
          bookingImgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/577455f1-b269-4da3-beb7-8d7aa79de07a-home-hiding-in-forest-new-zealand-33.jpg',
          city: 'Elk Park',
          state: 'North Carolina',
        },
        {
          title: 'San Francisco Dungeon',
          description: 'Unorthodox space for experimental noise of any kind. 18+ at all events. Alcohol sold upstairs with valid ID. Earplugs available at door.',
          maxGuests: '85',
          dailyCost: '70.00',
          address: '145 Jefferson St',
          bookingImgUrl: 'https://i.pinimg.com/originals/24/f7/f4/24f7f4bc8d9b8b8c8b64669c7c170fa3.jpg',
          city: 'San Francisco',
          state: 'California',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
