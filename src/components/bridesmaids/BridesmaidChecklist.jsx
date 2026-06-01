import React, { useState } from 'react'
import checklistData from '../../data/bridesmaids/bridesmaidChecklist.json'

export default function BridesmaidsChecklist() {
  const [checked, setChecked] = useState({})

  const toggle = (key) => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="checklist-page">

      {Object.entries(checklistData).map(([section, items]) => (
        <div key={section} className="checklist-section">

          {/* SECTION HEADER (DATE) */}
          <h3 className="checklist-section-title">
            {section}
          </h3>

          {/* ITEMS */}
          <div className="checklist-group">

            {items.map((item, i) => {
              const parentKey = `${section}-${i}`

              return (
                <div key={parentKey} className="checklist-item-block">

                  {/* MAIN ITEM */}
                  <label className="checklist-item">

                    <input
                      type="checkbox"
                      checked={!!checked[parentKey]}
                      onChange={() => toggle(parentKey)}
                    />

                    <span className={checked[parentKey] ? 'done' : ''}>
                      {item.label}
                    </span>

                  </label>

                  {/* SUBTASKS */}
                  {item.subtasks?.length > 0 && (
                    <div className="subtasks">

                      {item.subtasks.map((sub, j) => {
                        const subKey = `${parentKey}-${j}`

                        return (
                          <label key={subKey} className="checklist-item sub">

                            <input
                              type="checkbox"
                              checked={!!checked[subKey]}
                              onChange={() => toggle(subKey)}
                            />

                            <span className={checked[subKey] ? 'done' : ''}>
                              {sub}
                            </span>

                          </label>
                        )
                      })}

                    </div>
                  )}

                </div>
              )
            })}

          </div>
        </div>
      ))}

    </div>
  )
}