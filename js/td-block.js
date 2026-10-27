// td_block class - setiap ajax block menggunakan object ini
class TdBlock {
  constructor() {
    this.id = '';
    this.block_type = 1;
    this.atts = '';
    this.td_column_number = '';
    this.td_current_page = 1;
    this.post_count = 0;
    this.found_posts = 0;
    this.max_num_pages = 0;
    this.td_filter_value = '';
    this.is_ajax_running = false;
    this.td_user_action = '';
    this.header_color = '';
    this.ajax_pagination_infinite_stop = '';
  }
}

export default TdBlock;
