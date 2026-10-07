/**
 * Form validation for the qualification / checklist lead form.
 */

/**
 * @param {{ q1: string, q2: string, q3: string }} a
 * @param {{ name: string, firm: string, email: string, phone: string }} f
 * @param {boolean} checklistOnly
 * @returns {Record<string, number>}
 */
export function getFormErrors(a, f, checklistOnly) {
  const e = {};
  if (!f.name.trim()) e.name = 1;
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 1;
  if (!checklistOnly) {
    if (!f.firm.trim()) e.firm = 1;
    if (f.phone.replace(/\D/g, "").length < 6) e.phone = 1;
    ["q1", "q2", "q3"].forEach((q) => {
      if (!a[q]) e[q] = 1;
    });
  }
  return e;
}
