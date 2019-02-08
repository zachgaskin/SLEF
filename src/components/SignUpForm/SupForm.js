import React, { Component } from 'react'
import { Section } from '../../utils'

export class SupForm extends Component {
  rawMarkup() {
    var rawMarkup = this.props.content
    return { __html: rawMarkupc }
  }
  render() {
    return (
      <Section>
        <div className="modal-body">
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </Section>
    )
  }
}

const rawMarkupc = `
<div id="mf_placeholder" 
     data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477" 
     data-formheight="6315"  
     data-formtitle="2019 Football & Cheer Registration Copy"  
     data-paddingbottom="10">
</div>
<script>
	(function(f,o,r,m){
		r=f.createElement('script');r.async=1;r.src=o+'js/mf.js';
		m=f.getElementById('mf_placeholder'); m.parentNode.insertBefore(r, m);
	})(document,'https://littleeaglefootball.forms-db.com/');
</script>
`
