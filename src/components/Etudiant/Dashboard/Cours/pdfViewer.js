import React from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfViewer = ({ title }) => (
  <PDFViewer width="100%" height="100%">
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{title}</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfViewer;
