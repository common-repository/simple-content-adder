<?php

//custom post types 

add_action( 'init', 'cptui_register_my_cpts_sca_content' );
function cptui_register_my_cpts_sca_content() {
	$labels = array(
		"name" => __( 'Added Content ', '' ),
		"singular_name" => __( 'Added Content ', '' ),
		);

	$args = array(
		"label" => __( 'Added Content ', '' ),
		"labels" => $labels,
		"description" => "",
		"public" => false,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => false,
		"rest_base" => "",
		"has_archive" => false,
		"show_in_menu" => false,
				"exclude_from_search" => true,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "sca_content", "with_front" => false ),
		"query_var" => true,
		
		"supports" => array( "title", "editor" ),					);
	register_post_type( "sca_content", $args );

// End of cptui_register_my_cpts_sca_content()
}

//custom fields for custom post types 

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_added-content-details',
		'title' => 'Added Content Details',
		'fields' => array (
			array (
				'key' => 'field_57e2511ba5956',
				'label' => 'Position ',
				'name' => 'sca_position',
				'type' => 'checkbox',
				'required' => 1,
				'choices' => array (
					'Above Content' => 'Above Content',
					'BelowContent' => 'Below Content',
                    'FixedPosition' => 'Footer',
				),
				'default_value' => 'Above Content',
				'layout' => 'vertical',
			),
			array (
				'key' => 'field_57e251c8a5957',
				'label' => 'Include	In',
				'name' => 'sca_include',
				'type' => 'checkbox',
				'required' => 1,
				'choices' => array (
					'Posts' => 'Posts',
					'Pages' => 'Pages',
                    'Footer' => 'Everywhere',
				),
				'default_value' => 'Posts',
				'layout' => 'vertical',
			),
            array (
				'key' => 'field_57e251c8a0712',
				'label' => 'Show on Front Page',
				'name' => 'sca_front',
				'type' => 'checkbox',
				'required' => 0,
				'choices' => array (
					'No' => 'No',
					'Yes' => 'Yes',
				),
				'default_value' => 'No',
				'layout' => 'vertical',
			),
            array (
				'key' => 'field_57dfb585e96f9',
				'label' => 'Added Content Class',
				'name' => 'sca_class',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => 'Default: None',
				'prepend' => '',
				'append' => '',
				'formatting' => '',
				'maxlength' => '10',
			),
			array (
				'key' => 'field_57e255b2ba010',
				'label' => 'Content to Add',
				'name' => 'sca_content',
				'type' => 'wysiwyg',
				'required' => 1,
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'yes',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'sca_content',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'acf_after_title',
			'layout' => 'no_box',
			'hide_on_screen' => array (
				0 => 'permalink',
				1 => 'the_content',
				2 => 'excerpt',
				3 => 'custom_fields',
				4 => 'discussion',
				5 => 'comments',
				6 => 'revisions',
				7 => 'slug',
				8 => 'author',
				9 => 'format',
				10 => 'featured_image',
				11 => 'categories',
				12 => 'tags',
				13 => 'send-trackbacks',
			),
		),
		'menu_order' => 0,
	));
}
