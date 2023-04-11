import React from 'react';
export interface IconProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of icon to display
     */
    type?: 'accessibility_new' | 'accessible_forward' | 'account_balance' | 'account_box' | 'account_circle' | 'add' | 'add_circle' | 'add_circle_outline' | 'alarm' | 'alernate_email' | 'announcement' | 'arrow_back' | 'arrow_downward' | 'arrow_drop_down' | 'arrow_drop_up' | 'arrow_forward' | 'arrow_upward' | 'api' | 'assessment' | 'attach_file' | 'attach_money' | 'autorenew' | 'backpack' | 'bathtub' | 'bedding' | 'bookmark' | 'bug_report' | 'build' | 'calendar_today' | 'campaign' | 'camping' | 'cancel' | 'chat' | 'check' | 'check_box_outline_blank' | 'check_circle' | 'check_circle_outline' | 'checkroom' | 'clean_hands' | 'clothes' | 'close' | 'closed_caption' | 'cloud' | 'code' | 'comment' | 'connect_without_contact' | 'construction' | 'construction_worker' | 'contact_page' | 'content_copy' | 'coronavirus' | 'credit_card' | 'deck' | 'delete' | 'device_thermostat' | 'directions' | 'directions_bike' | 'directions_bus' | 'directions_car' | 'directions_walk' | 'do_not_disturb' | 'do_not_touch' | 'drag_handle' | 'eco' | 'edit' | 'electrical_services' | 'emoji_events' | 'error' | 'error_outline' | 'event' | 'expand_less' | 'expand_more' | 'facebook' | 'fast_forward' | 'fast_rewind' | 'favorite' | 'favorite_border' | 'file_download' | 'file_present' | 'file_upload' | 'filter_alt' | 'filter_list' | 'fingerprint' | 'first_page' | 'flag' | 'flickr' | 'flight' | 'flooding' | 'folder' | 'folder_open' | 'format_quote' | 'format_size' | 'forum' | 'github' | 'grid_view' | 'group_add' | 'groups' | 'hearing' | 'help' | 'help_outline' | 'highlight_off' | 'history' | 'home' | 'hospital' | 'hotel' | 'hourglass_empty' | 'hurricane' | 'identification' | 'image' | 'info' | 'info_outline' | 'insights' | 'instagram' | 'keyboard' | 'label' | 'language' | 'last_page' | 'launch' | 'lightbulb' | 'lightbulb_outline' | 'link' | 'link_off' | 'list' | 'local_cafe' | 'local_fire_department' | 'local_gas_station' | 'local_grocery_store' | 'local_hospital' | 'local_laundry_servie' | 'local_library' | 'local_offer' | 'local_parking' | 'local_pharmacy' | 'local_police' | 'local_taxi' | 'location_city' | 'lock' | 'lock_open' | 'lock_outline' | 'login' | 'logout' | 'loop' | 'mail' | 'mail_outline' | 'map' | 'masks' | 'medical_services' | 'menu' | 'military_tech' | 'more_horiz' | 'more_vert' | 'my_location' | 'navigate_before' | 'navigate_next' | 'navigate_far_before' | 'navigate_far_next' | 'near_me' | 'notifications' | 'notifications_active' | 'notifications_none' | 'park' | 'people' | 'person' | 'pets' | 'phone' | 'photo_camera' | 'print' | 'priority_high' | 'public' | 'push_pin' | 'radio_button_unchecked' | 'rain' | 'reduce_capacity' | 'remove' | 'report' | 'restaurant' | 'rss_feed' | 'safety_divider' | 'sanitizer' | 'save_alt' | 'severe_weather' | 'schedule' | 'school' | 'science' | 'search' | 'security' | 'send' | 'sentiment_dissatisfied' | 'sentiment_neutral' | 'sentiment_satisfied' | 'sentiment_satisfied_alt' | 'sentiment_very_dissatisfied' | 'settings' | 'share' | 'shield' | 'shopping_basket' | 'snow' | 'soap' | 'social_distance' | 'sort_arrow' | 'spellcheck' | 'star' | 'star_half' | 'star_outline' | 'store' | 'support' | 'support_agent' | 'text_fields' | 'thumb_down_alt' | 'thumb_up_alt' | 'timer' | 'toggle_off' | 'toggle_on' | 'topic' | 'tornado' | 'translate' | 'trending_down' | 'trending_up' | 'twitter' | 'undo' | 'unfold_less' | 'unfold_more' | 'update' | 'upload_file' | 'verified' | 'verified_user' | 'visibility' | 'visibility_off' | 'volume_off' | 'warning' | 'wash' | 'wifi' | 'work' | 'youtube' | 'zoom_in' | 'zoom_out_map' | 'zoom_out';
    /**
     * The size of the icon
     */
    size?: 'size-3' | 'size-4' | 'size-5' | 'size-6' | 'size-7' | 'size-8' | 'size-9';
    /**
     * A custom class to apply to the component
     */
    className?: string;
}
/**
 * Icons help communicate meaning, actions, status, or feedback.
 */
export declare const Icon: ({ id, type, size, className, }: IconProps) => React.ReactElement;
export default Icon;
