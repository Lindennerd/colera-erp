export interface Database {
  public: {
    Tables: {
      Address: {
        Row: {
          city: string | null;
          complement: string | null;
          created_at: string;
          id: number;
          number: number | null;
          state: string | null;
          street: string | null;
        };
        Insert: {
          city?: string | null;
          complement?: string | null;
          created_at?: string;
          id?: number;
          number?: number | null;
          state?: string | null;
          street?: string | null;
        };
        Update: {
          city?: string | null;
          complement?: string | null;
          created_at?: string;
          id?: number;
          number?: number | null;
          state?: string | null;
          street?: string | null;
        };
        Relationships: [];
      };
      Client: {
        Row: {
          address_id: number | null;
          birth_date: string | null;
          company_id: number | null;
          created_at: string;
          email: string | null;
          id: number;
          name: string | null;
          phone: string | null;
        };
        Insert: {
          address_id?: number | null;
          birth_date?: string | null;
          company_id?: number | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          phone?: string | null;
        };
        Update: {
          address_id?: number | null;
          birth_date?: string | null;
          company_id?: number | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          phone?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Client_address_id_fkey";
            columns: ["address_id"];
            referencedRelation: "Address";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Client_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "Company";
            referencedColumns: ["id"];
          }
        ];
      };
      Company: {
        Row: {
          address_id: number | null;
          created_at: string;
          documents_id: string | null;
          id: number;
          logo_id: string | null;
          name: string | null;
          phone: string | null;
        };
        Insert: {
          address_id?: number | null;
          created_at?: string;
          documents_id?: string | null;
          id?: number;
          logo_id?: string | null;
          name?: string | null;
          phone?: string | null;
        };
        Update: {
          address_id?: number | null;
          created_at?: string;
          documents_id?: string | null;
          id?: number;
          logo_id?: string | null;
          name?: string | null;
          phone?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Company_address_id_fkey";
            columns: ["address_id"];
            referencedRelation: "Address";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Company_documents_id_fkey";
            columns: ["documents_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Company_logo_id_fkey";
            columns: ["logo_id"];
            referencedRelation: "objects";
            referencedColumns: ["id"];
          }
        ];
      };
      CompanyUser: {
        Row: {
          company_id: number | null;
          created_at: string;
          id: number;
          user_id: number | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "CompanyUser_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "Company";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "CompanyUser_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      CompanyUserRole: {
        Row: {
          id: number;
          role: string | null;
        };
        Insert: {
          id?: number;
          role?: string | null;
        };
        Update: {
          id?: number;
          role?: string | null;
        };
        Relationships: [];
      };
      Employee: {
        Row: {
          created_at: string;
          extra_wager: number | null;
          fgts: number | null;
          id: number;
          inss: number | null;
          name: string | null;
          recision: number | null;
          vacacion: number | null;
          vr: number | null;
          vt: number | null;
          wage: number | null;
        };
        Insert: {
          created_at?: string;
          extra_wager?: number | null;
          fgts?: number | null;
          id?: number;
          inss?: number | null;
          name?: string | null;
          recision?: number | null;
          vacacion?: number | null;
          vr?: number | null;
          vt?: number | null;
          wage?: number | null;
        };
        Update: {
          created_at?: string;
          extra_wager?: number | null;
          fgts?: number | null;
          id?: number;
          inss?: number | null;
          name?: string | null;
          recision?: number | null;
          vacacion?: number | null;
          vr?: number | null;
          vt?: number | null;
          wage?: number | null;
        };
        Relationships: [];
      };
      FixedExpense: {
        Row: {
          company_id: number | null;
          created_at: string;
          id: number;
          type: string | null;
          value: number | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          type?: string | null;
          value?: number | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          type?: string | null;
          value?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "FixedExpense_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "Company";
            referencedColumns: ["id"];
          }
        ];
      };
      Order: {
        Row: {
          channel: string | null;
          client_id: number | null;
          created_at: string;
          discount: number | null;
          id: number;
          installments: number | null;
          payment_method: number | null;
          product_id: number | null;
          quantity: number | null;
        };
        Insert: {
          channel?: string | null;
          client_id?: number | null;
          created_at?: string;
          discount?: number | null;
          id?: number;
          installments?: number | null;
          payment_method?: number | null;
          product_id?: number | null;
          quantity?: number | null;
        };
        Update: {
          channel?: string | null;
          client_id?: number | null;
          created_at?: string;
          discount?: number | null;
          id?: number;
          installments?: number | null;
          payment_method?: number | null;
          product_id?: number | null;
          quantity?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Order_client_id_fkey";
            columns: ["client_id"];
            referencedRelation: "Client";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Order_payment_method_fkey";
            columns: ["payment_method"];
            referencedRelation: "PaymentMethods";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Order_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "Product";
            referencedColumns: ["id"];
          }
        ];
      };
      PaymentMethods: {
        Row: {
          company_id: number | null;
          created_at: string;
          description: string | null;
          id: number;
          interest: number | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          interest?: number | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          interest?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "PaymentMethods_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "Company";
            referencedColumns: ["id"];
          }
        ];
      };
      Product: {
        Row: {
          company_id: number | null;
          created_at: string;
          id: number;
          margin: number | null;
          picture: string | null;
          price: number | null;
          product: string | null;
          retail_margin: number | null;
          retail_price: number | null;
          sku: number | null;
          unit_cost: number | null;
          wholesale_price: number | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          margin?: number | null;
          picture?: string | null;
          price?: number | null;
          product?: string | null;
          retail_margin?: number | null;
          retail_price?: number | null;
          sku?: number | null;
          unit_cost?: number | null;
          wholesale_price?: number | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          margin?: number | null;
          picture?: string | null;
          price?: number | null;
          product?: string | null;
          retail_margin?: number | null;
          retail_price?: number | null;
          sku?: number | null;
          unit_cost?: number | null;
          wholesale_price?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Product_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "Company";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Product_picture_fkey";
            columns: ["picture"];
            referencedRelation: "objects";
            referencedColumns: ["id"];
          }
        ];
      };
      ProductInfo: {
        Row: {
          created_at: string;
          id: number;
          info: JSON | null;
          product_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          info?: JSON | null;
          product_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          info?: JSON | null;
          product_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "ProductInfo_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "Product";
            referencedColumns: ["id"];
          }
        ];
      };
      Reposition: {
        Row: {
          channel: string | null;
          client_id: number | null;
          created_at: string;
          discount: number | null;
          id: number;
          installments: number | null;
          payment_method: number | null;
          product_id: number | null;
          quantity: number | null;
        };
        Insert: {
          channel?: string | null;
          client_id?: number | null;
          created_at?: string;
          discount?: number | null;
          id?: number;
          installments?: number | null;
          payment_method?: number | null;
          product_id?: number | null;
          quantity?: number | null;
        };
        Update: {
          channel?: string | null;
          client_id?: number | null;
          created_at?: string;
          discount?: number | null;
          id?: number;
          installments?: number | null;
          payment_method?: number | null;
          product_id?: number | null;
          quantity?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Reposition_client_id_fkey";
            columns: ["client_id"];
            referencedRelation: "Client";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Reposition_payment_method_fkey";
            columns: ["payment_method"];
            referencedRelation: "PaymentMethods";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Reposition_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "Product";
            referencedColumns: ["id"];
          }
        ];
      };
      User: {
        Row: {
          created_at: string;
          email: string | null;
          id: number;
          name: string | null;
          user_role: number | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          user_role?: number | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          user_role?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "User_user_role_fkey";
            columns: ["user_role"];
            referencedRelation: "CompanyUserRole";
            referencedColumns: ["id"];
          }
        ];
      };
      VariableExpense: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
          value: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
          value?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
          value?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
