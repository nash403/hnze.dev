import type { z } from 'zod/v4'
import type { navigationBarSchema } from '../../content.config'

// Schéma réutilisable pour les données de navigation (fr/en)
export type NavigationBar = z.infer<typeof navigationBarSchema>
