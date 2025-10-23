"use client"

<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
=======
import Notification, { type NotificationType } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import * as React from "react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  const getType = React.useCallback(
    (title: React.ReactNode, variant?: "default" | "destructive"): NotificationType => {
      if (variant === "destructive") return "error"
      const text = typeof title === "string" ? title : ""
      if (/loading|memuat|processing/i.test(text)) return "loading"
      if (/warning|peringatan/i.test(text)) return "warning"
      if (/berhasil|success/i.test(text)) return "success"
      return "info"
    },
    []
  )

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 space-y-2 flex flex-col items-center">
      {toasts
        .filter((t) => t.open !== false)
        .map(({ id, title, description, variant }) => {
          const type = getType(title, variant)
          return (
            <Notification
              key={id}
              type={type}
              title={typeof title === "string" ? title : String(title ?? "")}
              message={
                typeof description === "string"
                  ? description
                  : description
                  ? String(description)
                  : undefined
              }
              showIcon={true}
              duration={type === "error" ? 8000 : 4000}
              onClose={() => dismiss(id)}
            />
          )
        })}
    </div>
>>>>>>> d4b6760bb73a642c3315a423166c99fc96e752eb
  )
}