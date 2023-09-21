import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./FaqAccordion.module.css";

function FaqAccordion() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>FAQs</h1>
      <Accordion sx={{ borderRadius: "6px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            color: "var(--color-white)",
            backgroundColor: "var(--color-black)",
            borderRadius: "6px",
            border: "1px solid var(--color-white)",
          }}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 600,
            }}
            variant="body2"
          >
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ borderRadius: "6px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            color: "var(--color-white)",
            backgroundColor: "var(--color-black)",
            borderRadius: "6px",
            border: "1px solid var(--color-white)",
          }}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: 600,
            }}
            variant="body2"
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
