# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
Rails.application.config.assets.precompile += %w( application.js )
Rails.application.config.assets.precompile += %w( gm_user-panel.js )
Rails.application.config.assets.precompile += %w( fonts.css )
Rails.application.config.assets.precompile += %w( complaint_form.css )
Rails.application.config.assets.precompile += %w( map_styles.css )
Rails.application.config.assets.precompile += %w( confirmation.css )
Rails.application.config.assets.precompile += %w( social_group.css )
Rails.application.config.assets.precompile += %w( completed.css )