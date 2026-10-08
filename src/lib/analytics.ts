// Utilitário para rastreamento de eventos GA4

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
};

export const trackCtaClick = (origin: string, text?: string) => {
  trackEvent("cta_click", {
    button_origin: origin,
    button_text: text || "Agendar diagnóstico"
  });
};

export const trackWhatsAppClick = (origin: string) => {
  trackEvent("whatsapp_click", {
    click_origin: origin
  });
};

export const trackLeadSubmit = (data: {
  revenue?: string;
  has_store?: boolean;
}) => {
  trackEvent("lead_submit", {
    ...data,
    conversion: true
  });
};
