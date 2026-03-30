from PyPDF2 import PdfReader

pdf_path = r"c:\Users\USER\AppData\Roaming\Cursor\User\workspaceStorage\a340587f3400da2ff3ad58cc3eda33ac\pdfs\64bd0a84-a5c2-4f21-a5d1-63d44cea04b6\PrepAI Community Weekly #01_ The Best Assessment Discussions This Week.pdf"

reader = PdfReader(pdf_path)

for page_num, page in enumerate(reader.pages):
    if "/Annots" in page:
        for annot in page["/Annots"]:
            obj = annot.get_object()
            if "/A" in obj and "/URI" in obj["/A"]:
                uri = obj["/A"]["/URI"]
                print(f"Page {page_num + 1}: {uri}")
