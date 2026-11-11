import { describe, expect, it } from "vitest";
import { CATEGORIES, EFFORT_LABEL, buildStackChecklist } from "../stack";

describe("CATEGORIES data", () => {
  it("has unique category ids", () => {
    const ids = CATEGORIES.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every category at least one alternative", () => {
    for (const c of CATEGORIES) expect(c.picks.length).toBeGreaterThan(0);
  });

  it("uses only known effort levels and https links", () => {
    for (const c of CATEGORIES) {
      for (const p of c.picks) {
        expect(Object.keys(EFFORT_LABEL)).toContain(p.effort);
        expect(p.url).toMatch(/^https:\/\//);
        expect(p.why.length).toBeGreaterThan(10);
      }
    }
  });
});

describe("buildStackChecklist", () => {
  it("returns a prompt when nothing is selected", () => {
    const md = buildStackChecklist([]);
    expect(md).toContain("# Your free and open-source stack");
    expect(md).toContain("Tick the tools you use");
    expect(md).not.toContain("- [ ]");
  });

  it("lists every pick of a selected category as a checklist item", () => {
    const c = CATEGORIES[0];
    const md = buildStackChecklist([c.id]);
    expect(md).toContain(`## ${c.need}`);
    for (const p of c.picks) expect(md).toContain(`- [ ] **${p.name}**`);
  });

  it("ignores unknown ids", () => {
    expect(buildStackChecklist(["does-not-exist"])).toBe(buildStackChecklist([]));
  });

  it("keeps the order of CATEGORIES, not selection order", () => {
    const [a, b] = CATEGORIES;
    const md = buildStackChecklist([b.id, a.id]);
    expect(md.indexOf(a.need)).toBeLessThan(md.indexOf(b.need));
  });
});
