import React from 'react';
import { Icon } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignSelf: 'flex-start',
    marginTop: '-2%',
    zIndex: '0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: '10px',
  },
}));

const Benefits = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<Icon name='hand pointer outline' size='large' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <div className='about-heading' style={{ fontSize: '1.2em' }}>
            OUR BENEFITS ARE:
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className='benefits-container' style={{ marginTop: '-2%' }}>
            <div className='benefits-item'>Flexible Schedules</div>
            <div className='benefits-item'>Paid Time-Off</div>
            <div className='benefits-item'>Performance Bonuses</div>
            <div className='benefits-item'>
              Health and Dental Benefits after 1 year (for Full-Time Positions)
            </div>
            <div className='benefits-item'>Travel Opportunities</div>
            <div className='benefits-item'>
              Professional Training and Development
            </div>
            <div className='benefits-item'>Tuition Support</div>
            <div className='benefits-item'>Positive Work Culture</div>
            <div className='benefits-item'>
              Zero Tolerance for Workplace Bullying
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Benefits;
