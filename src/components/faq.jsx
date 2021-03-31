import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(36),
      fontWeight: theme.typography.fontWeightRegular,
    },
    paragraph: {
      fontSize: theme.typography.pxToRem(26),
      fontWeight: theme.typography.fontWeightRegular,
    },
    hideBorder: {
        '&.MuiAccordion-rounded': {
          boxShadow: 'none',
        }
    }
  }));
  
export const Faq = (props) => {
    const classes = useStyles();

    return (
      <div id='faq-container' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>FAQ's</h2>
          </div>
          <div id='accordion-container' className='row'>
            <Accordion className={classes.hideBorder}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Question 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.hideBorder}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Question 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.hideBorder}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Question 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
          </div>
        </div>
      </div>
    )
  }
  