import React from 'react'

class MachForm extends React.Component {
  render() {
    this.componentDidMount()
    {
      return (
        <div id="machform">
          <div
            id="mf_placeholder"
            data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
            data-formheight="6315"
            data-formtitle="2019 Football & Cheer Registration Copy"
            data-paddingbottom="10"
          />
          <script>
            {(function(f, o, r, m) {
              r = f.createElement('script')
              r.async = 1
              r.src = o + 'js/mf.js'
              m = f.getElementById('mf_placeholder')
              document.getElementsByTagName('body')[0].insertBefore(r, m)
            })(document, 'https://littleeaglefootball.forms-db.com/')}
          </script>
        </div>
      )
    }
  }
}

export default MachForm
