export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  configuration?: string;
  interest?: string;
  visitDate?: string;
  visitTime?: string;
  message?: string;
  [key: string]: any;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; message?: string }> {
  // Strip any internal or honeypot fields
  const { _honey, ...cleanFields } = data;

  const leadName = cleanFields.name?.trim() || "Interested Buyer";
  const leadPhone = cleanFields.phone?.trim() || "Not provided";
  const leadEmail = cleanFields.email?.trim() || "propsmartrealty@gmail.com";
  const leadConfig = cleanFields.configuration || cleanFields.interest || "Not specified";
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const subject = `New Lead: Shapoorji Vyomora - ${leadName} (${leadPhone})`;

  // Construct FormSubmit FormData for native browser multipart submission
  const formData = new FormData();
  formData.append("Name", leadName);
  formData.append("Phone", leadPhone);
  formData.append("Email", leadEmail);
  formData.append("Configuration", leadConfig);
  if (cleanFields.visit_date || cleanFields.visitDate) {
    formData.append("Preferred Visit Date", cleanFields.visit_date || cleanFields.visitDate);
  }
  formData.append("Project", "Shapoorji Pallonji Joyville Vyomora (Mahalunge-Hinjewadi)");
  formData.append("Submitted At (IST)", timestamp);
  formData.append("_subject", subject);
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  const jsonPayload = {
    name: leadName,
    phone: leadPhone,
    email: leadEmail,
    configuration: leadConfig,
    visit_date: cleanFields.visit_date || cleanFields.visitDate || "",
    project: "Shapoorji Pallonji Joyville Vyomora",
    submitted_at: timestamp,
    _subject: subject,
  };

  try {
    // 1. Direct Browser FormData dispatch to FormSubmit
    const directFormSubmit = fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData,
    }).catch((err) => {
      console.warn("Direct FormSubmit warning:", err);
      return null;
    });

    // 2. Internal Server-Side dispatch to /api/contact
    const internalApiSubmit = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(jsonPayload),
    }).catch((err) => {
      console.warn("Internal API warning:", err);
      return null;
    });

    // Await both promises concurrently
    await Promise.all([directFormSubmit, internalApiSubmit]);

    return { success: true, message: "Enquiry submitted successfully" };
  } catch (error) {
    console.error("submitLead error:", error);
    return { success: true, message: "Enquiry received" };
  }
}
