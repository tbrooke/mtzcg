// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import footer from './footer.js';
import home from './home.js';
import page from './page.js';
import post from './post.js';
import elements from './elements.js';
import action from './action.js';
import action_huge from './action_huge.js';
import contact_with_link from './contact_with_link.js';
import contact_with_text from './contact_with_text.js';
import palette from './palette.js';
import features from './features.js';
import cta from './cta.js';
import posts from './posts.js';
import site_menus from './site_menus.js';
import site_menu_item from './site_menu_item.js';
import page_menus from './page_menus.js';
import page_menu_item from './page_menu_item.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    footer,
    home,
    page,
    post,
    elements,
    action,
    action_huge,
    contact_with_link,
    contact_with_text,
    palette,
    features,
    cta,
    posts,
    site_menus,
    site_menu_item,
    page_menus,
    page_menu_item
    ])
})
